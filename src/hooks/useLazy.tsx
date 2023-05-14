import {useEffect, useState} from 'react';

export default function useLazy(image: HTMLImageElement | null) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && image) {
        setIsVisible(true);
        observer.unobserve(image);
      }
    });
    if (image) {
      observer.observe(image);
    }


  return () => observer.disconnect();
}, [image]);
  return {
    isVisible
  }
}
