import React, { ReactNode } from "react";

type Props = {
  content: string;
  icon: ReactNode;
};

export default function Icon({ content, icon }: Props) {
  return (
    <>
      <button>
        {content}
        {icon}
      </button>
    </>
  );
}
