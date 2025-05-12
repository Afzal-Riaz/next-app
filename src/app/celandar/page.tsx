'use client';

import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type FormData = {
  selectedDate: Date | null;
};

export default function DatePickerForm() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      selectedDate: new Date(),
    },
  });

  const onSubmit = (data: FormData) => {
    alert(`Selected date: ${data.selectedDate?.toLocaleDateString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>


      <Controller
        control={control}
        name="selectedDate"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={value}
            onChange={onChange}
            dateFormat="dd-MM-yyyy"
            className=""
          />
        )}
      />
    </form>
  );
}
