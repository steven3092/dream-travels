// import { act, renderHook } from '@testing-library/react';
// import { useModal } from './use-modal';

// describe('useModal', () => {
//   it('should change the isOpen value', () => {
//     const { result } = renderHook(() => useModal());

//     expect(result.current.isOpen).toBeFalsy();

//     act(() => {
//       result.current.toggleStatus();
//     });

//     expect(result.current.isOpen).toBeTruthy();
//   });

//   it('should resize content when isOpen is true', () => {
//     const mockModalElement = document.createElement('div');
//     mockModalElement.id = 'ipp-modal';

//     const mockModalElementContent = document.createElement('div');
//     mockModalElementContent.id = 'ipp-modal-content';

//     mockModalElement.appendChild(mockModalElementContent);
//     document.body.appendChild(mockModalElement);

//     const { result } = renderHook(() => useModal());

//     act(() => {
//       result.current.resizeContent(true);
//     });

//     expect(mockModalElement).toHaveStyle({ alignItems: 'center' });
//     expect(mockModalElementContent).toHaveStyle({ maxWidth: 'fit-content' });

//     act(() => {
//       result.current.resizeContent(false);
//     });

//     expect(mockModalElement).toHaveStyle({ alignItems: 'normal' });
//     expect(mockModalElementContent).toHaveStyle({ maxWidth: '1280px' });
//   });
// });
