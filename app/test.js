import { supabase } from '../lib/supabase';

export async function getServerSideProps() {
  const { data, error } = await supabase.from('your_table').select('*');
  return { props: { data, error } };
}

export default function TestPage({ data, error }) {
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Supabase Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
