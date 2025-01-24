"use client";
import { useEffect } from "react";
import styles from "../steps/Steps.module.scss";
import Image from "next/image";
import { useContextState, useOpenAiState, useUserState } from "@/app/core/application/global-state";
import { UtilApplication } from "@/app/core/application/utils";
import { OpenAiService } from "@/app/infrastructure/services";
import { IOpenAiResponseReply, IOpenAiResponseStatus } from "@/app/core/application/dto";


const ContextPush: React.FC = () => {
  const {contextState} = useContextState((state)=>state);
  const {setOpenAiResponse} = useOpenAiState((state)=>state);
  const {user} = useUserState((state)=>state);

  useEffect(()=>{
    const [target,current_level,age_range,day_week] = contextState;
    const prompt:string = UtilApplication.createPrompt(target,current_level,age_range,day_week);

    const promptApi = async():Promise<void> =>{
      const data: IOpenAiResponseStatus | IOpenAiResponseReply = await OpenAiService.createPromptAPi(prompt, user?.token || "");
      const dataReply = data as IOpenAiResponseReply;
      setOpenAiResponse(dataReply);
      console.log("...",dataReply);
    }
    promptApi();
  }, [])
  return (
    <div className={styles.contextpush}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          wait a moment, we are preparing your routine
        </h2>
      </div>
      <div className={styles.optionsGrid}>
        <Image
          src="/img/joseui.png"
          alt="Jose Iu Smart"
          className={styles.icon}
          width={400} // Ajusta el ancho
          height={400} // Ajusta el alto
        />
      </div>
      <button className={styles.continueButton}>
        <p>
          <a href="/exercises">Continue</a>
        </p>
      </button>
    </div>
  );
};

export default ContextPush;
