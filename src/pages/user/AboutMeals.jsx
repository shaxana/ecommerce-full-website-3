import React from 'react'
import './../../style/sass/aboutmeals.scss'
function AboutMeals() {
    return (
        <section className='BurgerAbout'>
            <div className="containerabout">
                <div className="about">
                    <div className="text">
                        <h1>Yemeklerimiz haqqinda</h1>
                    </div>
                    <div className="image">
                        <img src="https://mcdonalds.az/images/e1365cd6b7a0589ce08bdd726c4d7ab3.jpg" alt="" />
                    </div>
                </div>
                <div className="abou2">
                    <div className="middle">
                        <h2>Yeməklərimiz haqqında</h2>
                        <p>Menyumuza daha çox seçim əlavə etməklə və məhz sifariş verdiyiniz zaman hazırlanmış təzə burgerləri təqdim <br /> etməklə
                            biz hər zaman müştərilərimizə və yeməklərimizə olan sadiqliyimizi nümayiş edirik.</p>
                        <p>
                            <a href="https://mcdonalds.az/files/listofproductsandcalories.pdf">
                                https://mcdonalds.az/files/listofproductsandcalories.pdf
                            </a> </p>
                    </div>
                    <div className="image2">
                        <img src="https://mcdonalds.az/images/f2064015a43b46299d9e5f19aba1a5d7.png" alt="" />
                        <h2>Biz keyfiyyətə sadiq qalırıq</h2>
                        <p>Biz yeməklərimizin hazırlanma üsullarını və onlara daxil olan ərzaqların <br /> keyfiyyətini daima təkmilləşdiririk.</p>
                        <button className='btn' style={{ background: "#ffbc0d" }}> <a href="./About.jsx"></a>Daha etrafli</button>
                    </div>
                    <div className="image3">
                        <img src="https://mcdonalds.az/images/a36abce3ef3696a739d3ea5f6294a30e.png" alt="" />

                        <h2>Tez-tez verilən suallar</h2>
                        <p>Sizi maraqlandıran suallara cavab tapın.</p>
                        <button className='btn' style={{ background: "#ffbc0d" }}> <a href="./About.jsx"></a>Daha etrafli</button>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default AboutMeals;