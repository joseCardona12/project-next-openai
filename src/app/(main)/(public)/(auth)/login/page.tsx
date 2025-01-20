import OpenAiService from "@/app/infrastructure/services/openAi.service";
import { LoginTemplate } from "@/ui/template/LoginTemplate";

export default function LoginView() {
  OpenAiService.createPrompt(
    "Mi objetivo es bajar de peso, soy sedentario, tengo entre 19-29 años, quiero 3-4 dias en la semana, puedo dedciar a la session 30min. Necesito que me respondas los ejercicios en un formato json con las propiedades: name, numberSecond,series, imageUrlRandom esta propiedad debe ser una rl random para ver la imagen"
  );
  return <LoginTemplate />;
}
