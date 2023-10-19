import { Layout, Menu, Divider, Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ContentFullWidth from './ContentFullWidth';
import ContentLayout from './ContentLayout';
import styles from './layout.module.scss';

const MainLayout = () => {
    const { Header, Content, Footer } = Layout;
    const navigate = useNavigate();
    const location = useLocation();
    const apiUrl = 'https://6530e43d6c756603295f450a.mockapi.io/api/company/company';
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('data', data);
            })
            .catch((error) => {
                console.error('Lỗi:', error);
            });
    }, []);
    return (
        <Layout className={styles.layout}>
            <Divider style={{ margin: 0 }} />
            <Header className={styles.header}>
                <Row style={{ paddingBottom: '15px' }} justify="space-between" align="middle">
                    <Col>
                        <Link to="/">
                            <Row align="middle">My CV</Row>
                        </Link>
                    </Col>
                    <Col>
                        <Menu mode="horizontal" defaultSelectedKeys={['1']} disabledOverflow>
                            <Menu.SubMenu
                                title="Skills"
                                // onTitleClick={() => navigate("/chat-luong-nuoc")}
                            ></Menu.SubMenu>
                            <Menu.SubMenu
                                title="Education"
                                // onTitleClick={() => navigate("/lien-he")}
                            ></Menu.SubMenu>
                            <Menu.SubMenu
                                title="Experience"
                                // onTitleClick={() => navigate("/lien-he")}
                            ></Menu.SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Divider style={{ marginTop: '19px', marginBottom: 0 }} />
            <Content>{location.pathname === '/' ? <ContentFullWidth /> : <ContentLayout />}</Content>
            <Divider style={{ margin: 0 }} />
            {/* <Footer
                className="footer"
                style={{
                    background: 'white',
                    margin: 'auto',
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: '1200px'
                }}
            >
                <FooterContent />
            </Footer> */}
        </Layout>
    );
};
export default MainLayout;
