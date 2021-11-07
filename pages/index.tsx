import Image from 'next/image';
import { Htag } from '../components';
import { Button } from '../components/Button/Button';

export default function Home(): JSX.Element {
    const a = 5;
    return (
        <div>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='down'>Button</Button>
            <Button appearance='ghost' arrow='right'>Button</Button>
        </div>
    );
}