import { render, screen } from '@testing-library/react';
import endIcons from '../../atoms/Form/Input/dummyData/endIcons';
import startIcons from '../../atoms/Form/Input/dummyData/startIcons';
import Input from '../../atoms/Form/Input/Input';
import InputGroup from './InputGroup';

describe('input area is functional if', () => {
    it('renders', () => {
        render(
            <InputGroup data-testid="OG">
                <Input name="OG1" id="OG1" label="Class" onChange={() => {}} />
                <Input name="OG2" id="OG2" label="Primitive" onChange={() => {}} />
            </InputGroup>,
        );
        const inputGroup = screen.getByTestId('OG');

        expect(inputGroup).toBeInTheDocument();
    });

    it('it renders children and splits them evenly if possible or uses custom widths', () => {
        const { rerender } = render(
            <div style={{ width: '500px' }}>
                <InputGroup data-testid="OG">
                    <Input
                        name="OG1"
                        id="OG1"
                        label="Class"
                        onChange={() => {}}
                        startIcons={startIcons}
                    />
                    <Input
                        name="OG2"
                        id="OG2"
                        label="Primitive"
                        onChange={() => {}}
                        endIcons={endIcons}
                    />
                </InputGroup>
            </div>,
        );

        const inputGroup = screen.getByTestId('OG');
        const child1: HTMLInputElement = screen.getByLabelText('Class');
        const child2 = screen.getByLabelText('Primitive');

        expect(getComputedStyle(inputGroup).gridTemplateColumns).toEqual('repeat(2,1fr)');
        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();

        rerender(
            <div style={{ width: '500px' }}>
                <InputGroup data-testid="OG" childrenLength={['200px', '300px']}>
                    <Input
                        name="OG1"
                        id="OG1"
                        label="Class"
                        onChange={() => {}}
                        startIcons={startIcons}
                    />
                    <Input
                        name="OG2"
                        id="OG2"
                        label="Primitive"
                        onChange={() => {}}
                        endIcons={endIcons}
                    />
                </InputGroup>
            </div>,
        );

        expect(getComputedStyle(inputGroup).gridTemplateColumns).toEqual('200px 300px');
    });
});
