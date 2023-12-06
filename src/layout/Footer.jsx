import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import './../style/sass/footer.scss'
function Footer() {
  return (
    <div>
        <Container>
            <Row>
        <footer style={{display:"flex",margin:"0 auto"}}>
            <div className="firstfooter">
                <ul>
                    <li>Haqqımızda</li>
                    <br />
                    <li>Tariximiz</li>
                    <li>Xəbərlər və bildirişlər</li>
                    <li>Siz soruşursunuz. Biz cavablandırırq</li>
                    <li>Dəyərlərimiz</li>   
                </ul>
            </div>
            
                <ul className="secondfooter">
                    <li>Karyera</li>
                    <br />
                    <li>İnsanlarımızla tanış olun: Heyət və idarəetmə</li>
                    <li>İndi müraciət edin</li>

                     
                </ul>
           <ul className='thirdfooter'>
            <li>Xidmətlər</li>
            <br />
            <li>Wi-fi</li>
            <li>McDelivery®</li>
            <li>MakAvto®</li>
            <li>Mobil tətbiqi yükləyin</li>
           </ul>
           <ul className='lastfooter'>
            <li>Mobil tətbiq haqqında fikirləriniz</li>
            <li>Restoran haqqında fikirləriniz</li>
           </ul>
        </footer>   
        </Row>
        </Container>
    </div>
  )
}

export default Footer