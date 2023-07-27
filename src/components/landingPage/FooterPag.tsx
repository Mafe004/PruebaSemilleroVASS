import { Col, Container, Row } from "react-bootstrap";

function FooterPag() {

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container className='text-start  text-lg-start text-muted'>
        <section className=''>
          <Container className='text-start  text-md-start mt-5'>
            <Row className='mt-3'>
              <Col md='3' lg='2' xl='3' className='mx-auto mb-2'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  Complex made simple
                </h6>
                <img src="./Images/VASS_600X600.png" alt="Logo" style={{width:"50px", marginTop:"250px"}}/>
              </Col>

              <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Sitemap VASS</h6>
                <Container>Home</Container>
                <Container>Casos éxito</Container>
                <Container>Somos VASS</Container >
                <Container>Impactos</Container>
                <Container>Métodos</Container>
                <Container>Tecnologías</Container>
                <Container>Proyectos I+D+i</Container>
                <Container>Insights</Container>
                <Container>Noticias</Container>
                <Container>VASS Research</Container>
                <Container> Canal de denuncias</Container>
                <Container>Contacto</Container>
              </Col>

              <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>SiteMap Talento</h6>
                <Container> Talnto </Container>
                <Container> #LifeVASS</Container>
                <Container> Beneficios</Container >
                <Container> Planes para ti</Container>
                <Container>Proyectos </Container>
                <Container>Smartworking</Container>
                <Container>Ofernats</Container>
              </Col>

              <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Empresa</h6>
                <Container> VASS </Container>
                <Container> Nateevo</Container>
                <Container> Serbatic</Container >
                <Container> Planes para ti</Container>
              
              </Col>
            </Row>
          </Container>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: "black"}}>
          © 2021 Copyright:Todos los derechos reservados
        </div>
      </Container>
    </div>
  );
}
export default FooterPag