import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './ServicesWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'

const tabs = [
    { label: 'Batteries', slug: 'batteries' },
    { label: 'Tires', slug: 'tires' },
    { label: 'Wheels', slug: 'wheels' }
]

const contentMap = {
    batteries: {
        year: 2025,
        title: 'One-Year Warranty for Formulaplus Car Batteries',
        content: `This warranty document outlines the terms and conditions of the one-year warranty provided for car batteries manufactured by Formulaplus.

Warranty Terms

1. Warranty Period:
   The warranty is valid for 12 months from the purchase date (or 20,000 km of mileage, whichever comes first), as stated in the receipt or warranty card.

2. Scope of Warranty:
   • Replacement or free repair of the battery in case of a manufacturing defect.
   • Inspection and diagnostics are carried out exclusively at authorized service centers.

Warranty Coverage

The warranty applies to:
• Malfunctions caused by manufacturing defects.
• Inability of the battery to hold a charge under proper operating conditions.

Warranty Exclusions

The warranty does not cover:

1. Improper Use:
   • Overcharging, deep discharge, or use outside the recommended temperature range.
   • Using the battery in devices for which it is not intended.

2. Mechanical Damage:
   • Impacts, cracks, deformation of the casing, or terminal damage.

3. Unauthorized Repairs:
   • Attempts at self-repair or unauthorized servicing.
   • Opening or inspecting the battery in service centers not authorized by Formulaplus.

4. Natural Wear and Tear:
   • Capacity reduction due to prolonged use.

Warranty Claim Procedure

5. Contact the battery seller with the original receipt and warranty card.
6. Specialists will diagnose the issue to determine the cause of the malfunction.
7. If a manufacturing defect is confirmed, the battery will be repaired or replaced free of charge.

Usage Recommendations

• Regularly check the battery's charge level and voltage.
• Follow the recommended temperature range and avoid deep discharge.
• Prevent mechanical damage and contact with chemically active substances.

Formulaplus guarantees the high quality of its products and strives to ensure maximum customer satisfaction.`
    },
    tires: {
        year: 2025,
        title: 'Warranty for Cervo Tires',
        content: `There are several types of warranties that come with the tires: Manufacturing Defects Warranty and Mileage Warranty. All tires come with a basic warranty against manufacturing defects. Here is additional information intended to help you understand the different warranties and how to proceed when making a warranty claim.

Manufacturing Defects Warranty: All tires have a certain basic warranty against defects arising during the manufacture. This includes defects in workmanship or materials that render the tire unsafe or of the road. Because tires are an isolated case of one tire not balancing. This is not expected quickly after the tire has been installed on the vehicle. The length of the manufacturing defects warranty depends on the manufacturer and the type of tire.

Mileage Warranty: This type of warranty will guarantee that the tire will perform until a certain predetermined mileage for example 50,000 miles. To file a mileage warranty, you must be able to provide the following: Installation records with mileage, rotation and mileage records when the tire is removed from the vehicle to qualify for the mileage warranty, tires must be uniformly worn and have a tread balance of 2/32 or less. Your papers and tires will be examined and measured if so, you will receive credit for unused mileage under warranty.`
    },
    wheels: {
        year: 2025,
        title: 'Warranty for Alloy Wheels',
        content: `All purchased discs are covered by a 12-month manufacturer's warranty, subject to the Buyer's compliance with all the provisions specified in the instructions accompanying the product. The warranty is valid from the date of purchase (delivery).

When you receive the discs, it is necessary to inspect them in detail for visual defects. No complaints about the appearance of the discs will be accepted after signing the sales receipt.

THEY ARE NOT COVERED BY THE WARRANTY:

• Defects caused by installing the wrong size rims or on a vehicle not regulated by the manufacturer;

• Deformation due to improper operation (exceeding the permissible weight or shock loads from dropping the machine into a pit, hitting a foreign object or a curbstone, etc.);

• Partial or complete loss of paint coating in case of improper storage of discs or mechanical influences;

• Damage to the disc or its coating during incorrect installation on the vehicle;

• Appearance of cosmetic defects resulting from the use of chemicals as cleaning agents (chrome-plated and painted discs);

• Occurrence of defects caused by an emergency situation;

• Discoloration or swelling of the paintwork as a result of winter de-icing agents being applied to the wheels.

CONDITIONS OF USE OF AUTOMOBILE DISCS

• The size of the discs and tires mounted on the car must be regulated by the manufacturer.

• Before putting on the discs, they should be tried on (without tires) to the car on the front and rear hub axles to check that all mounting holes match and that the disc will not touch the car parts when rotating.

• Paint defects and corrosion caused by improper care and the use of chemicals to clean the rims are not grounds for a warranty claim.

RECOMMENDATIONS FOR THE CARE OF LIGHT ALLOY WHEELS

Chromed and painted rims: To keep the paint finish as long as possible, always clean the rim with only mild water-based detergents. Avoid contact with salt, brake dust, gasoline, and chemical-based detergents commonly used in touch-free car washes.

Polished rims: We recommend using only mild detergent automotive cleaners for cleaning. Use an aluminum metal polish to maintain and enhance the shine.`
    }
}

const ServicesWrap = ({ type }) => {
    const router = useRouter()
    const data = contentMap[type] || {}

    return (
        <>
            <section className={s.servicesWrap}>
                <Container>
                    <div className={s.top}>
                        <div className={s.top_wrap}>
                            <Breadcrumbs white />
                            <div className={s.top_category}>
                                {tabs.map(tab => (
                                    <Link
                                        key={tab.slug}
                                        href={`/services/${tab.slug}`}
                                        className={tab.slug === type ? s.activeTab : ''}
                                    >
                                        {tab.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className={s.title}>
                            <h3>Services</h3>
                            <h2>
                                <span>{type.toUpperCase()}</span>
                                <br />
                                WARRANTY
                            </h2>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={s.content}>
                <Container>
                    <div className={s.content_box}>
                        <div>
                            <h4>{data.year}</h4>
                            <h3>{data.title}</h3>
                        </div>
                        <p style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ServicesWrap