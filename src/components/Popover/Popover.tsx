import { ElementType, ReactNode, useRef, useState } from 'react'
import { FloatingPortal, useFloating, arrow, offset, shift } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  children: ReactNode
  renderPopover: ReactNode
  className?: string
  as?: ElementType
}

export default function Popover({ children, renderPopover, className, as: Element = 'div' }: Props) {
  const [open, setOpen] = useState(false)
  const arrowRef = useRef(null)
  const { x, y, refs, strategy, middlewareData } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [shift(), arrow({ element: arrowRef }), offset(0)]
  })
  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <Element className={className} ref={refs.setReference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className='border-x-transparent border-t-transparent border-b-white border-[11px] absolute translate-y-[-95%] z-10'
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
