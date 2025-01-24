import { NextResponse } from "next/server";
import  {prisma}  from '@/lib/prisma'
import jwt,{ JwtPayload } from 'jsonwebtoken'

export async function POST(request: Request) {

    try{
        const body = await request.json();
        const authorization = request.headers.get('Authorization');

        if(!authorization){
            return NextResponse.json(
                {error: 'Not authorized'},
                {status: 401}
            )
        }

        const token = authorization.split(' ')[1];

        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY is not defined in the environment variables');
        }

        try{
            const decoded = jwt.verify(token,process.env.JWT_KEY) as JwtPayload;

            if(!body.age_range_id || !body.day_week_id || !body.current_level_id || !body.target_id){
                return NextResponse.json(
                    {error: "Age range, days per week, currente level and targer are required"},
                    { status: 400 }
                )
            }

            const context = await prisma.context.create({
                data: {
                    age_range_id: body.age_range_id,
                    day_week_id: body.day_week_id,
                    user_id: decoded.id,
                    current_level_id: body.current_level_id,
                    target_id: body.target_id
                }
            })

            return NextResponse.json(
                {
                    message: 'Context successfully created',
                    context: context,
                },
                { status: 201 }
            );

        } catch(error){
            if(error instanceof Error){
                return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
            }
        }
    }
    catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {message: error.message},
                {status: 500}
            )
        }
    }
}

export async function GET(request:Request){
    try{
        const authorization = request.headers.get('Authorization');

        if(!authorization){
            return NextResponse.json(
                {error: 'Not authorized'},
                {status: 401}
            )
        }

        const token = authorization.split(' ')[1];

        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY is not defined in the environment variables');
        }

        try{
            const decoded = jwt.verify(token, process.env.JWT_KEY) as JwtPayload;
            console.log(decoded.id)

            const contextFound = await prisma.context.findUnique({
                where: {
                  user_id: decoded.id,
                },
                select: {
                    id: true, 
                    age_ranges: {
                      select: {
                        name: true, 
                      },
                    },
                    day_weeks: {
                      select: {
                        quantity_day: true, 
                      },
                    },
                    current_levels: {
                      select: {
                        name: true, 
                      },
                    },
                    targets: {
                      select: {
                        name: true, 
                      },
                    },
                    users: {
                        select: {
                          id: true, 
                          name: true, 
                          email: true, 
                          gender: {
                            select: {
                              name: true,  
                            },
                          },
                        },
                      },
                  },
              });

            console.log('context', contextFound)

            return NextResponse.json(
                {
                    message: 'Context successfully found',
                    context: {
                        id: contextFound?.id,
                        user: {
                            id: contextFound?.users.id,
                            name: contextFound?.users.name,
                            email: contextFound?.users.email,
                            gender: contextFound?.users.gender.name,
                          },
                        age_ranges: contextFound?.age_ranges.name,
                        day_weeks: contextFound?.day_weeks.quantity_day,
                        current_levels: contextFound?.current_levels.name,
                        targets: contextFound?.targets.name,
                      },
                },
                { status: 200 }
            );

        }catch(error){
            if(error instanceof Error){
                return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
            }
        }
    }
    catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {message: error.message},
                {status: 500}
            )
        }
    }
}