import { useEffect } from 'react';

function useScroll(callback) {
    useEffect(() => {
        const handleScroll = event => {
            // const totalHeight = event.srcElement.scrollHeight || event.target.scrollingElement.scrollHeight;
            const currentScroll = event.srcElement.scrollTop || event.target.scrollingElement.scrollTop;
            // const scrollHeight = totalHeight - currentScroll;
            callback(currentScroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [callback]);
}

// function MyComponent() {
//     useScroll(() => {
//         console.log('Scrolling...');
//     });
//     return <div>My content</div>;
// }

export default useScroll;