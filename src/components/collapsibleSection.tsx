import {useState, ReactNode} from 'react';
import {Button, Collapse} from 'antd';

const {Panel} = Collapse;

function CollapsibleSection({title, children}: {title: string; children: ReactNode}) {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Button onClick={handleToggle}>
                {isOpen ? 'Hide the math!' : 'Show me the math!'}
            </Button>
            <Collapse activeKey={isOpen ? '1' : ''} ghost>
                <Panel showArrow={false} key="1" header="">
                    {children}
                </Panel>
            </Collapse>
        </div>
    );
}

export default CollapsibleSection;
