import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar, Form, Button, NavDropdown, FormControl, Breadcrumb, Spinner, Tab, Tabs, Table, ProgressBar, Pagination, Popover, OverlayTrigger, Collapse} from "react-bootstrap";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      buka: false,
    }
  }

  render (){
    const munculPopover =
      <Popover id="popover-basic">
      <Popover.Title as="h3">Informasi Website</Popover.Title>
      <Popover.Content>
        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
      </Popover.Content>
    </Popover>
    return (
      <Container fluid>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Berita">Berita</Nav.Link>
                <Nav.Link href="#Scores">Live Scores</Nav.Link>
                <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Scores">Transfer Pemain</Nav.Link>
                <Nav.Link href="#Scores">Tim</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        <Row>
          <Col></Col>
          <Col xs={9}>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col xs={5}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
              </Col>
            </Row>
            <br /><br />
            <Row>
              <Col sm={10}><h4>Rumor Transfer Pemain</h4></Col>
              <Col sm={2} className="text-right"><Spinner animation="border" variant="success" /><Spinner animation="grow" variant="success" /></Col>
            </Row>
            <br />
            <Row>
              <Tabs className="ml-5" defaultActiveKey="semua-transfer" id="uncontrolled-tab-example">
                <Tab eventKey="semua-transfer" title="Semua Transfer" Active></Tab>
                <Tab eventKey="liga-Inggris" title="Liga Primer Inggris"></Tab>
                <Tab eventKey="serie-a" title="Serie A"></Tab>
                <Tab eventKey="divisi-primera" title="Divisi Primera"></Tab>
                <Tab eventKey="bundesliga" title="Bundesliga"></Tab>
                <Tab eventKey="liga-indonesia" title="Liga 1 Indonesia"></Tab>
              </Tabs>
            </Row>
            <br />
            <Row>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>MAROUANE FELLAINI</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td><ProgressBar animated now={85} label={'85%'} /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>LUIS NANI</td>
                    <td>SPORTING CP</td>
                    <td>ORLANDO CITY</td>
                    <td><ProgressBar animated now={55} label={'55%'} /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MAREK HAMSIK</td>
                    <td>NAPOLI</td>
                    <td>DALIAN YIFANG</td>
                    <td><ProgressBar animated now={95} label={'95%'} /></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SARDAR AZMOUN</td>
                    <td>RUBIN KAZAN</td>
                    <td>ZENIT ST PETERSBURG</td>
                    <td><ProgressBar animated now={100} label={'100%'} /></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>MICHY BATSHUAYI</td>
                    <td>CHELSEA</td>
                    <td>CRYSTAL PALACE</td>
                    <td><ProgressBar animated now={50} label={'50%'} /></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>LUCAS PIAZON</td>
                    <td>CHELSEA</td>
                    <td>CHIEVO</td>
                    <td><ProgressBar animated now={100} label={'100%'} /></td>
                  </tr>
                </tbody>
              </Table>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item >{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Row>
            <Row>
              <OverlayTrigger trigger="click" placement="right" overlay={munculPopover}>
                <Button variant="primary">Munculkan Overlay</Button>
              </OverlayTrigger>
              <Button variant="primary" onClick={()=>this.setState({buka:!this.state.buka})}>Tampilkan</Button><br />
            </Row>
            <Collapse  in={this.state.buka}>
              <p>Akses Sport V1.0</p>
            </Collapse>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;