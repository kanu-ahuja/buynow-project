import React from 'react'
import partnerimg1 from '../image/partner1.png'
import partnerimg2 from '../image/partner2.png'
import partnerimg3 from '../image/partner3.png'
import partnerimg4 from '../image/partner4.png'
import partnerimg5 from '../image/partner5.png'
import partnerimg6 from '../image/partner6.png'


const Our_partners = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='Our_partners'>
                        <div className='our_partner_brand'>
                            <h2 className='large_body_text our_partner_text'>Our Partners</h2>
                        </div>

                        <div className='our_partner_collection'>
                            <div className='our_partner_items'>
                                <img src={partnerimg1} alt='error' />
                            </div>

                            <div className='our_partner_items'>
                                <img src={partnerimg2} alt='error' />
                            </div>

                            <div className='our_partner_items'>
                                <img src={partnerimg3} alt='error' />
                            </div>
                            <div className='our_partner_items'>
                                <img src={partnerimg4} alt='error' />
                            </div>

                            <div className='our_partner_items'>
                                <img src={partnerimg5} alt='error' />
                            </div>

                            <div className='our_partner_items'>
                                <img src={partnerimg6} alt='error' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Our_partners
