import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-rows-[repeat(10,minmax(0,1fr))] grid-cols-[repeat(16,minmax(0,1fr))] gap-4 max-w-full mx-auto py-2 px-1 w-screen h-screen overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  variant = "normal", // default variant
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "minimal" | "normal" | "complex";
}) => {
  return (
    <motion.div
      className={cn(
        "row-span-1 rounded-xl group/bento p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
      whileHover={{
        borderColor: "#dc143c", // Red border color when hovering
        scale: 1.02,
      }} // Slight expansion of the grid }} // Scale the item when hovering
      transition={{ duration: 0.3 }}
    >
      {variant === "normal" && (
        <>
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1 mt-1">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
          </div>
        </>
      )}

      {variant === "minimal" && (
        <>
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1 mt-1 flex flex-row items-center opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300">
              <div>{title}</div>
              <div className="ml-auto">{icon}</div>
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300">
              {description}
            </div>
          </div>
          {header}
        </>
      )}

      {variant === "complex" && (
        <>
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};
