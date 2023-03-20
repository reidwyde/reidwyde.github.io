import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;

const CopyrightFooter = () => (
    <Footer
        style={{
            textAlign: 'center',
            width: '100%',
            left: 0,
            right: 0,
            bottom: 0,
            position: 'fixed',
        }}
    >
        ©2023 Reid Wyde. All rights reserved.
    </Footer>
);

export default CopyrightFooter;
