import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function main(){
    try {
        // Limpiar las tablas existentes
        await prisma.$transaction([
            prisma.gender.deleteMany(),
            prisma.age_range.deleteMany(),
            prisma.day_week.deleteMany(),
            prisma.target.deleteMany(),
            prisma.current_level.deleteMany(),
        ]);

        // Crear los registros
        await prisma.gender.createMany({
            data : [
                {name: 'men'},
                {name: 'women'}
            ]
        })
        
        await prisma.age_range.createMany({
            data : [
                {name: 'teenager'},
                {name: 'young_adult'},
                {name: 'adult'},
                {name: 'elderly'}
            ]
        })

        await prisma.day_week.createMany({
            data : [
                {quantity_day: '2'},
                {quantity_day: '3'},
                {quantity_day: '4'},
                {quantity_day: '5'},
                {quantity_day: '6'},
            ]
        })

        await prisma.target.createMany({
            data : [
                {name: 'lose_weight'},
                {name: 'gain_muscle'},
                {name: 'improve_endurance'},
                {name: 'flexibility'},
                {name: 'physical'},
            ]
        })

        await prisma.current_level.createMany({
            data : [
                {name: 'sedentary'},
                {name: 'moderate'},
                {name: 'active'},
                {name: 'very_active'},
            ]
        })

        console.log('Seed completed successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
}

main()
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });