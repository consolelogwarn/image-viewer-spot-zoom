import React from "react";
import { render, screen } from '@testing-library/react';
import ImageViewer from "./ImageViewer";


describe('ImageViewer Component', ()=> {
    const URL = "https://example.com/dummy.png";
    const ALT_TXT = "spot-zoom-image-viewer";

    test("Div with class spot-zoom must be present", ()=> {
        const { container } = render(<ImageViewer src={URL} alt={ALT_TXT}/>);
        expect(container.getElementsByClassName('spot-zoom').length).toBe(1);
    });

    test("spot-zoom div must have background image", ()=> {
        const { container } = render(<ImageViewer src={URL} alt={ALT_TXT}/>);
        const style = container.getElementsByClassName('spot-zoom')[0].getAttribute('style');
        expect(style).toContain(`background-image: url(${URL})`);
    });

    test("Image node must exists", ()=> {
        const { container } = render(<ImageViewer src={URL} alt={ALT_TXT}/>);
        expect(container.getElementsByTagName('img').length).toBe(1);
    });

    test("Image must have all text", ()=> {
        render(<ImageViewer src={URL} alt={ALT_TXT}/>);
        expect(screen.getAllByAltText(ALT_TXT)).toBeTruthy();
    });

    test("Image must have src attribute", ()=> {
        const { container } = render(<ImageViewer src={URL} alt={ALT_TXT}/>);
        expect(container.getElementsByTagName('img')[0].getAttribute('src')).toBe(URL);
    });
    
});



