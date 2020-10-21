import React, { FC, useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { object as Obj, string as Str } from 'yup';

import { useAppDispatch, createTask, useSelectActive } from '../../../store';
import { ReactComponent as Plus } from '../../../svg/plus.svg';
import { ReactComponent as Close } from '../../../svg/close.svg';


interface Schema {
  title: string;
}

interface Props {
  onFocus: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = Obj().shape({
  title: Str().trim().required()
});


const AddTaskForm: FC<Props> = ({ onFocus, setter }) => {
  const activeListId = useSelectActive();
  const dispatch = useAppDispatch();
  const inputField = useRef<any>();

  useEffect(() => {
    if(onFocus) {
      inputField.current.focus()
    }
  }, [onFocus])

  const schemaValues: Schema = {
    title: ''
  }

  return (
    <Formik
      initialValues={schemaValues}
      validationSchema={formSchema}
      onSubmit={(
        { title }: Schema,
        { setSubmitting, resetForm }
      ) => {
        setSubmitting(true);
        dispatch(createTask({
          title,
          listId: activeListId,
        }))
        resetForm(schemaValues as any);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, isValid }) => (
        <Form className="flex items-center w-full">
          <Field
            id="title"
            name="title"
            type="text"
            innerRef={(el: any) => { inputField.current = el }}
            placeholder="Add new task"
            className={
              `flex-1 px-4 py-1 text-xl font-normal text-gray-900 placeholder-gray-600 rounded-l-lg focus:outline-none ${errors.title ?
                'border-2 border-red-500 bg-red-200' :
                'focus:shadow-outline'
              }`
            }
          />
          <div
            className={
              `inline-flex rounded-r-lg`
            }
          >
            <button
              className={
                `${!isValid ?
                'cursor-not-allowed bg-red-500 hover:bg-red-400' :
                'hover:bg-secondary-500 hover:text-white text-secondary-500 focus:outline-none'} font-bold py-2 px-4 focus:outline-none focus:shadow-outline`
              }
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              <Plus className="w-6 h-6" />
            </button>
            <button
              className="hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded-r text-red-500 focus:outline-none focus:shadow-outline"

              onClick={() => {
                setter(!onFocus);
              }}
            >
              <Close className="w-6 h-6" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddTaskForm;