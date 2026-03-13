import './WorkSection.css';
import Card from './Card.tsx';
import { type RefObject } from 'react';


type workRefProps = {
    workRef: RefObject<HTMLHeadingElement | null>
}

function WorkSection ({workRef} : workRefProps) {
    return (
        <>
            <h1 id = 'work-title' ref={workRef}>WORK EXPERIENCE</h1>
            <Card imgSrc="airalliance.png" title = "BowBot" role="FULL-STACK WEB DEVELOPER" text="yes so cool and amazing and i love wow great anfs yes hsdhsdbh sdhsjdsjd sdjsjd sdhjsjdjs sjdsjdjds sjdsjddj jsdjsj" date="AUG 2024 - PRESENT" githubLink='https://github.com/rice-apps/aa-dashboard' externalLink='https://github.com/rice-apps/aa-dashboard' skills={["testing"]}></Card>
            

        </>
    );
}
export default WorkSection;