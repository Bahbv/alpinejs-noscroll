import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function(Alpine) {
  Alpine.directive('noscroll', Alpine.skipDuringClone(
    (el, { expression }, { effect, evaluateLater }) => {
      let evaluator = evaluateLater(expression);

      let oldValue = false;

      let undoDisableScrolling = () => {};

      effect(() => evaluator(value => {
        if (oldValue === value) return;

        // Start noscroll.
        if (value && ! oldValue) {
          setTimeout(() => {
            undoDisableScrolling = disableScrolling(el);
          });
        }

        // Stop noscroll.
        if (! value && oldValue) {
          undoDisableScrolling();
          undoDisableScrolling = () => {};
        }

        oldValue = !! value;
      }));
    }
  ));
};

function disableScrolling(el) {
  disableBodyScroll(el, { reserveScrollBarGap: true });

  return () => {
    enableBodyScroll(el);
  };
};
