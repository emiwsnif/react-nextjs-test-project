import { Htag } from '../components';
import { Button } from '../components/Button/Button';
import { P } from '../components/P/P';
import { Tag } from '../components/Tag/Tag';

export default function Home(): JSX.Element {
    const a = 5;
    return (
        <div>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='down'>Button</Button>
            <Button appearance='ghost' arrow='right'>Button</Button>
            <P size='large'>Test</P>
            <P size='medium'>Test</P>
            <P size='small'>Test</P>
            <Tag size='small'>Test</Tag>
            <Tag size='medium'>Test</Tag>
            <Tag size='small' color='red'>Test</Tag>
            <Tag size='medium' color='red'>Test</Tag>
            <Tag size='small' color='green'>Test</Tag>
            <Tag size='small' color='primary'>Test</Tag>
        </div>
    );
}