import Image from 'next/image';
import { Htag } from '../components';

export default function Home(): JSX.Element {
    const a = 5;
    return (
        <div>
            <Htag tag="h1">Text</Htag>
        </div>
    );
}