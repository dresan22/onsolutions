import { useForm } from 'react-cool-form';

import '../Contact/contact.styles.scss';

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);

function Login() {
  const { form, use } = useForm({
    // (Strongly advise) Provide the default values just like we use React state
    defaultValues: { username: '', email: '', password: '' },
    // The event only triggered when the form is valid
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
  });
  // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = use('errors', { errorWithTouched: true });

  return (
    <form ref={form} noValidate>
      <Field
        label='Usuario'
        id='username'
        name='username'
        // Support built-in validation
        required
        error={errors.username}
      />

      <Field
        label='Clave'
        id='password'
        name='password'
        type='password'
        required
        minLength={8}
        error={errors.password}
      />
      <input type='submit' value='Entrar' />
    </form>
  );
}
export default Login;
