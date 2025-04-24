import React from 'react';


interface StepperProps {
    steps: string[];
    currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex items-center justify-center w-full">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    {index !== 0 && (
                        <div
                            className={`h-1 w-10 ${index <= currentStep ? "bg-blue-500" : "bg-gray-300"}`}
                        ></div>
                    )}
                    <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-lg font-semibold
              ${index < currentStep ? "bg-green-500" : index === currentStep ? "bg-blue-500" : "bg-gray-300"}`}
                    >
                        {index + 1}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stepper;
