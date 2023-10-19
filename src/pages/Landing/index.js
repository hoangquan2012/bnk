// import { Layout, Menu, Divider, Row, Col } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';
import { Col, Typography, Row, Space, Button, Divider } from 'antd';
import styles from './landing.module.scss';
import Typewriter from '../../component/Typewriter';
import menuImg from '../../common/images/menu.jpeg';
const { Text } = Typography;
const Home = () => {
    return (
        <Row className={styles.contentIntro}>
            <Col span={12} className={styles.introLeft}>
                <Space direction="vertical" className={styles.introContainer}>
                    <div className={styles.containerLeft}></div>
                    <Space className={styles.containerRight}>
                        <Text className={styles.text}>content.intro-1</Text>
                        <Text className={styles.text}>
                            <Typewriter text="blabla" delay={100} />
                        </Text>

                        <Space direction="vertical">
                            <Text className={styles.text}>content.intro-3</Text>
                            <Text className={styles.text}>content.intro-4</Text>
                        </Space>
                        <Button>content.order</Button>
                    </Space>
                </Space>
            </Col>
            <Col span={12} className={styles.introRight}>
                <motion.div
                    className={styles.box}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 36%),url(${menuImg})` }}
                />
            </Col>
        </Row>
    );
};
export default Home;
