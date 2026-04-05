const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const DUMMY_WORKERS = [
  // Plumbers
  { name: 'tushar', phone: '555-0101', city: 'vasai', serviceType: 'Plumber' },
  { name: 'hardik', phone: '555-0102', city: 'vasai', serviceType: 'Plumber' },
  { name: 'pratham', phone: '555-0103', city: 'nalasopara', serviceType: 'Plumber' },
  { name: 'akash', phone: '555-0104', city: 'bhayandar', serviceType: 'Plumber' },

  // Carpenters
  { name: 'vatsal', phone: '555-0201', city: 'vasai', serviceType: 'Carpenter' },
  { name: 'viraj', phone: '555-0202', city: 'nalasopara', serviceType: 'Carpenter' },
  { name: 'tanvir', phone: '555-0203', city: 'bhayandar', serviceType: 'Carpenter' },
  { name: 'harshal', phone: '555-0204', city: 'vasai', serviceType: 'Carpenter' },

  // Electricians
  { name: 'adarsh', phone: '555-0301', city: 'vasai', serviceType: 'Electrician' },
  { name: 'yash', phone: '555-0302', city: 'nalasopara', serviceType: 'Electrician' },
  { name: 'dnyanesh', phone: '555-0303', city: 'bhayandar', serviceType: 'Electrician' },
  { name: 'aryan', phone: '555-0304', city: 'vasai', serviceType: 'Electrician' }
];

async function main() {
  console.log('Clearing existing workers for clean seed...');
  await prisma.worker.deleteMany();

  console.log('Seeding dummy workers...');
  for (const worker of DUMMY_WORKERS) {
    await prisma.worker.create({ data: worker });
  }
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
