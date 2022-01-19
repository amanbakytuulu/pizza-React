import classNames from 'classnames'
import React from 'react'

function Button({onClick,children,outline,className,disabled}) {
    return (
        <button onClick={onClick} className={classNames('button', className,{
            'button--outline':outline,
            'disabled': disabled
        })}>
            {children}
        </button>
    )
}

export default Button;
