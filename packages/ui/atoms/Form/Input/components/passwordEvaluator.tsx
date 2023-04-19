import { forwardRef, Ref, useState } from 'react';
import styled from 'styled-components';
import PasswordStrengthBar from 'react-password-strength-bar';
import { EvaluatorContainerInterface, PasswordEvaluatorInterface } from '../types/inputTypes';
import { fontsConfig } from '../../../Typography';
import { barColors, scoreWords } from '../dummyData/passwordBarProps';

const EvaluatorContainer: any = styled.div.attrs(({ score }: EvaluatorContainerInterface) => ({
    scoreColor: barColors[score],
}))`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    width: 100%;
    ${{ ...fontsConfig.paragraph2 }}
    color: ${(props) => props.scoreColor};

    .passwordStrengthBar {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        overflow-x: auto;

        & > div {
            margin: 0 !important;
            width: 60% !important;
            max-width: 200px;
        }

        .scoreWords {
            font-size: inherit !important;
            font-weight: inherit !important;
            margin: 0 !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
            width: 40% !important;
            color: inherit !important;
            overflow: hidden;
            padding-left: 10px;
        }
    }
`;

const PasswordEvaluator = forwardRef(
    ({ value, setError }: PasswordEvaluatorInterface, ref: Ref<HTMLDivElement>) => {
        const [inputScore, setInputScore] = useState<number>(0);

        const handleChange = (score: number, feedback: any) => {
            const { warning, suggestions } = feedback;
            setInputScore(score);

            if (warning && value !== '') {
                setError(warning);
                return;
            }

            if (suggestions && value !== '') {
                setError(suggestions.pop());
                return;
            }

            setError(null);
        };

        return (
            <EvaluatorContainer ref={ref} score={inputScore} data-testid="evaluatorContainer">
                <PasswordStrengthBar
                    className="passwordStrengthBar"
                    scoreWordClassName="scoreWords"
                    password={value}
                    scoreWords={scoreWords}
                    barColors={barColors}
                    onChangeScore={handleChange}
                    minLength={5}
                    shortScoreWord="Short"
                />
            </EvaluatorContainer>
        );
    },
);

export default PasswordEvaluator;
