// industrial-machine-data.ts
import { IndustrialMachine } from "../app/models/industrial-machine";

const industrialMachines: IndustrialMachine[] = [
  {
    id: '1',
    name: 'Excavator X100',
    description: 'Powerful excavator for heavy-duty tasks.',
    model: 'X100', // Adding model value
    manufacturer: 'ABC Machinery Co.',
    productionYear: 2020,
    imageUrl: 'https://wallpapercave.com/wp/wp2515765.jpg',
    value: 1000000,
    type: 'Heavy Machinery',
    condition: 'New',
    weight: 5000
  },
  {
    id: '2',
    name: 'Bulldozer Z200',
    description: 'Versatile bulldozer for construction projects.',
    model: 'Z200', // Adding model value
    manufacturer: 'XYZ Equipment Inc.',
    productionYear: 2019,
    imageUrl: 'https://wallpapercave.com/wp/wp2515765.jpg',
    value: 800000,
    type: 'Construction Equipment',
    condition: 'Used',
    weight: 7000
  },
  {
    id: '3',
    name: 'Drill Master 5000',
    description: 'High-performance industrial drill.',
    model: '5000', // Adding model value
    manufacturer: 'Tech Industrial Solutions',
    productionYear: 2021,
    imageUrl: 'https://wallpapercave.com/wp/wp2515693.jpg',
    value: 1200000,
    type: 'Industrial Tool',
    condition: 'Refurbished',
    weight: 3000
  },
  {
    id: '4',
    name: 'Crane MegaLift 300',
    description: 'Mega lifting capacity for heavy loads.',
    model: 'MegaLift 300', // Adding model value
    manufacturer: 'HeavyLift Co.',
    productionYear: 2022,
    imageUrl: 'https://wallpaperaccess.com/full/3752107.jpg',
    value: 1500000,
    type: 'Heavy Machinery',
    condition: 'New',
    weight: 8000
  },
  {
    id: '5',
    name: 'Excavator X200',
    description: 'Advanced excavator model for various tasks.',
    model: 'X200', // Adding model value
    manufacturer: 'ABC Machinery Co.',
    productionYear: 2023,
    imageUrl: 'https://cdn.wallpapersafari.com/96/24/lVTaYs.jpg',
    value: 1200000,
    type: 'Construction Equipment',
    condition: 'Used',
    weight: 6000
  },
];

export default industrialMachines;