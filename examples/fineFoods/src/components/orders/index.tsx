import {
    Typography,
    Row,
    Col,
    useApiUrl,
    useCustom,
    Spin,
} from "@pankod/refine";
import { IOrderTotalCount } from "interfaces";

import styles from "./styles";

export const Orders: React.FC = () => {
    const { Title } = Typography;

    const API_URL = useApiUrl();

    const url = `${API_URL}/orderTotalCount`;
    const { data, isLoading } = useCustom<IOrderTotalCount>(url, "get");

    if (isLoading) {
        return (
            <Row justify="center">
                <Spin spinning />
            </Row>
        );
    }

    return (
        <Row gutter={[16, 0]}>
            <Col md={12}>
                <Title style={styles.title} level={5}>
                    Total Order
                </Title>
                <div style={styles.countArea}>
                    <span style={styles.count}>{data.data.total}</span>
                    <img src="/images/bike.svg" width="40" />
                </div>
            </Col>
            <Col md={12}>
                <Title style={styles.title} level={5}>
                    Total Delivered
                </Title>
                <div style={styles.countArea}>
                    <span style={styles.count}>{data.data.totalDelivered}</span>
                    <img src="/images/order-success.svg" width="37" />
                </div>
            </Col>
        </Row>
    );
};