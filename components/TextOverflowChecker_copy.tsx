import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import styles from "./TextOverflowChecker_copy.module.css";

interface TextOverflowCheckerProps {
  children?: React.ReactNode;
}

const TextOverflowCheckerCopy = ({ children }: TextOverflowCheckerProps) => {
  return (
    <div className={styles.TextOverflowChecker}>
      <TooltipProvider>
        <Tooltip open={undefined}>
          <TooltipTrigger asChild>
            <div className={styles.tooltipContentWrapper}>
              <p className={`text-sm lg:text-base lg:h-[72px] line-clamp-3 mb-3 ${styles.overflowCheck}`}>
                {children}
              </p>
              <TooltipContent side="bottom" sideOffset={0} className="TooltipContent">
                <p>{children}</p>
              </TooltipContent>
            </div>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TextOverflowCheckerCopy