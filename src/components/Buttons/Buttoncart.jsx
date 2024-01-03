import React from 'react'

function Buttoncart({ text, hover = false }) {
    return (
        <button className={`normal-button ${hover === true ? 'cart-btn-hover' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.66699 15C5.75033 15 5.00866 15.75 5.00866 16.6666C5.00866 17.5833 5.75033 18.3333 6.66699 18.3333C7.58366 18.3333 8.33366 17.5833 8.33366 16.6666C8.33366 15.75 7.58366 15 6.66699 15ZM2.50033 1.66663C2.04009 1.66663 1.66699 2.03972 1.66699 2.49996C1.66699 2.9602 2.04009 3.33329 2.50033 3.33329H2.70118C3.08745 3.33329 3.43917 3.55575 3.6047 3.90475L6.11421 9.19563C6.252 9.48614 6.2417 9.82518 6.08653 10.1068L5.20866 11.7C5.07533 11.9333 5.00033 12.2083 5.00033 12.5C5.00033 13.4166 5.75033 14.1666 6.66699 14.1666H15.8337C16.2939 14.1666 16.667 13.7935 16.667 13.3333C16.667 12.8731 16.2939 12.5 15.8337 12.5H7.01699C6.91747 12.5 6.83614 12.4333 6.81439 12.3412C6.80674 12.3089 6.81274 12.2753 6.8208 12.2431C6.82933 12.2089 6.84228 12.176 6.8593 12.1452L7.2984 11.3499C7.47439 11.0312 7.80972 10.8333 8.17382 10.8333H13.792C14.417 10.8333 14.967 10.4916 15.2503 9.97496L18.2337 4.56663C18.3003 4.44996 18.3337 4.30829 18.3337 4.16663C18.3337 3.70829 17.9587 3.33329 17.5003 3.33329H5.81027C5.42273 3.33329 5.07009 3.10938 4.90525 2.75865L4.66207 2.24127C4.49723 1.89054 4.14459 1.66663 3.75705 1.66663H2.50033ZM15.0003 15C14.0837 15 13.342 15.75 13.342 16.6666C13.342 17.5833 14.0837 18.3333 15.0003 18.3333C15.917 18.3333 16.667 17.5833 16.667 16.6666C16.667 15.75 15.917 15 15.0003 15Z" fill="white" />
            </svg>
            <span>{text}</span>
        </button>
    )
}

export default Buttoncart