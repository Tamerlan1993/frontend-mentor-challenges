import { useForm } from 'react-hook-form';
import Field from './components/Field';

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
}

const App = () => {
  const { control } = useForm<IForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  return (
    <main className='w-screen h-screen bg-green-lighter flex items-center justify-center text-base'>
      <div className='bg-white p-5 w-2xl'>
        <h1 className='font-karla-bold text-2xl'>Contact Us</h1>
        <form>
          <div className='flex gap-4 mt-4'>
            <Field
              required
              control={control}
              name='firstName'
              label={'First Name'}
            />
            <Field
              required
              control={control}
              name='lastName'
              label={'Last Name'}
            />
          </div>
          <Field
            wrapperProps={{
              className: 'mt-4',
            }}
            required
            control={control}
            name='email'
            label={'Email'}
          />
        </form>
      </div>
    </main>
  );
};

export default App;
