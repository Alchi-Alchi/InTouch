import React from 'react';
import classes from '../../Styles/FormControl.module.css';
const Form = ({input, meta, ...props}) => {
  const forError = meta.touched && meta.error;
  return (
    <div className={classes.formControl + " " + (forError ? classes.error: "")}>
      <div>
        {props.children}
      </div>
      {forError && <span>{meta.error}</span>}
    </div>
  )
};
export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <Form {...props}><textarea {...input} {...restProps}></textarea></Form>
  )
};
export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <Form {...props}><input {...input} {...restProps}/></Form>
  )
};