import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function main(){
    await prisma.genders.createMany({
        data : [
            {name: 'men'},
            {name: 'women'}
        ]
    })
    
    await prisma.age_ranges.createMany({
        data : [
            {name: 'teenager'},
            {name: 'young_adult'},
            {name: 'adult'},
            {name: 'elderly'}
        ]
    })

    await prisma.day_weeks.createMany({
        data : [
            {quantity_day: '2'},
            {quantity_day: '3'},
            {quantity_day: '4'},
            {quantity_day: '5'},
            {quantity_day: '6'},
        ]
    })

    await prisma.day_weeks.createMany({
        data : [
            {quantity_day: '2'},
            {quantity_day: '3'},
            {quantity_day: '4'},
            {quantity_day: '5'},
            {quantity_day: '6'},
        ]
    })

    await prisma.targets.createMany({
        data : [
            {name: 'lose_weight'},
            {name: 'gain_muscle'},
            {name: 'improve_endurance'},
            {name: 'flexibility'},
            {name: 'physical'},
        ]
    })

    await prisma.targets.createMany({
        data : [
            {name: 'lose_weight'},
            {name: 'gain_muscle'},
            {name: 'improve_endurance'},
            {name: 'flexibility'},
            {name: 'physical'},
        ]
    })

    await prisma.current_levels.createMany({
        data : [
            {name: 'sedentary'},
            {name: 'moderate'},
            {name: 'active'},
            {name: 'very_active'},
        ]
    })
}

main().catch (error =>{
    console.log(error);
    process.exit(1);
}).finally(()=>{
    prisma.$disconnect
})