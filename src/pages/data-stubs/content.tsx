import { Picture } from '../components/picture';
import { ContentProps } from '../hooks/feeders/feeder-options';

const pictures = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfDJ8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1664472607170-692bc1d09eb8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDJ8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://plus.unsplash.com/premium_photo-1698867576619-6fb9faf28e64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://images.unsplash.com/photo-1459789034005-ba29c5783491?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://images.unsplash.com/photo-1560684352-8497838a2229?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://images.unsplash.com/photo-1441861539200-6208cf4a122f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfDJ8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1557748362-4e95f0de4f6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHwyfDB8fHww',
  'https://images.unsplash.com/photo-1635341814161-d696d538542c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0fGVufDB8MnwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1676642609912-7e47d0c59ba1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8MnwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXR8ZW58MHwyfDB8fHww',
];

const dummyContent: ContentProps[] = pictures.map((p, i) => ({
  id: 'c' + i,
  content:
    (i + 1) % 23 === 0 ? (
      <div style={{ height: '100%', backgroundColor: 'white' }}>
        Some content {i}
      </div>
    ) : (
      <Picture alt="" src={p} />
    ),
}));

export { pictures, dummyContent };
