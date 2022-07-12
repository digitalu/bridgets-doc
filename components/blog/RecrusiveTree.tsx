import React, { Fragment, useState } from 'react';

interface TreeBranch {
  readonly id?: string;
  readonly label: string;
  branches?: Tree;
  readonly comment: string;
  readonly type: 'file' | 'folder';
  readonly selected?: boolean;
}

type Tree = ReadonlyArray<TreeBranch>;

interface TreeItemProps {
  readonly id?: string;
  readonly step: number;
  readonly comment?: string;
  readonly type: 'file' | 'folder';
  readonly label: string;
  readonly children: ReadonlyArray<JSX.Element>;
}

export interface RecursiveTreeProps {
  readonly listMeta: Tree;
}

interface IconRenderedProps {
  label: string;
  type: 'file' | 'folder';
  children: ReadonlyArray<JSX.Element>;
  isOpen: boolean;
}

const IconRendered = ({
  label,
  type,
  isOpen,
}: IconRenderedProps): JSX.Element => {
  const cls = 'self-center w-4 mr-1';
  if (type === 'folder' && !isOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="#2196F3"
        width="1em"
        height="1em"
        className={cls}
      >
        <path d="M6.56 2.48H2.24c-.8 0-1.44.64-1.44 1.44v8.64c0 .79.65 1.44 1.44 1.44h11.52c.79 0 1.44-.65 1.44-1.44v-7.2c0-.8-.65-1.44-1.44-1.44H8L6.56 2.48z"></path>
      </svg>
    );
  } else if (type === 'folder' && isOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="#2196F3"
        width="1em"
        height="1em"
        className={cls}
      >
        <path d="M13.66 12.46H2.34v-7h11.32v7zm.1-8.54H8L6.56 2.48H2.24c-.8 0-1.44.64-1.44 1.44v8.64c0 .8.64 1.44 1.44 1.44h11.52c.8 0 1.44-.64 1.44-1.44v-7.2c0-.8-.65-1.44-1.44-1.44z"></path>
      </svg>
    );
  } else if (label === 'package.json') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className={cls}
      >
        <path
          fill="#92AA5D"
          d="M5 3h2v2H5v5a2 2 0 01-2 2 2 2 0 012 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 00-2-2H0v-2h1a2 2 0 002-2V5a2 2 0 012-2m14 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2m-7 12a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m-4 0a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m8 0a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1z"
        ></path>
      </svg>
    );
  } else if (label === 'package-lock.json') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#D14748"
        width="1em"
        height="1em"
        className={cls}
      >
        <path d="M3 3v18h18V3H3m3 3h12v12h-3V9h-3v9H6V6z"></path>
      </svg>
    );
  } else if (type === 'file' && label.slice(-3) == '.ts') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 -1 16 16"
        className={cls}
      >
        <path
          className="typeScript_svg__i-color"
          fill="#1E9CEF"
          d="M10.771 10.992a2.282 2.282 0 01-1.632-.759v1.29c1.055.686 2.87.56 3.5-.264a1.9 1.9 0 00.253-1.889c-.656-1.321-2.214-1.4-2.668-2.238-.5-1.351 1.564-1.6 2.557-.685V5.234a2.846 2.846 0 00-1.566-.277 1.919 1.919 0 00-2.067 1.867c-.054 1.5 1.663 1.891 2.525 2.586.586.498.544 1.703-.902 1.582zm-4.913.862V6.016H3.977v-.965h4.8v.965H6.9v5.838H5.857zM14.125.875v12.25H1.875V.875h12.25zM15 0H1v14h14V0z"
        ></path>
      </svg>
    );
  } else if (type == 'file') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="#7C95A1"
        className={cls}
      >
        <path d="M10.5 1H2.96S2 1 2 2v12c0 1 .96 1 .96 1h10c1 0 1.04-1 1.04-1V4.5L10.5 1zM13 14H3V2h6.5v3.5H13V14z"></path>
      </svg>
    );
  } else {
    return <></>;
  }
};

const TreeItem = ({ label, type, children, step, comment }: TreeItemProps) => {
  const [isOpen, toggleItemOpen] = useState<boolean>(true);
  return (
    <div className={`cursor relative ${isOpen ? '' : ''}`}>
      <div
        className={`absolute top-6 left-0.5 w-1 h-full bg-gray-800 ${
          type === 'folder' && isOpen ? 'block' : 'hidden'
        }`}
        style={{ width: 1, height: 'calc(100% - 24px)', left: step * 20 + 2 }}
      />
      <div className="flex items-center" style={{ marginLeft: step * 20 }}>
        {/* FOLDER ARROW */}
        {type == 'folder' && children.length > 0 && (
          <div
            className="self-center cursor-pointer"
            onClick={() => {
              toggleItemOpen(!isOpen);
            }}
          >
            <svg
              fill="none"
              height="10"
              viewBox="0 0 6 10"
              width="6"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-150 self-center items-center mr-2 ${
                isOpen ? 'rotate-90' : 'rotate-0'
              }`}
            >
              <path
                className="mt-1"
                d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                stroke="#999"
                strokeLinecap="square"
              ></path>
            </svg>
          </div>
        )}
        <div
          className={`flex text-sm ${type === 'folder' ? "cursor-pointer" : ""}`}
          onClick={() => {
            if (children) toggleItemOpen(!isOpen);
          }}
        >
          <IconRendered
            label={label}
            type={type}
            children={children}
            isOpen={isOpen}
          />
          <p
            className={`mb-0   ${
              type == 'folder'
                ? 'text-neutral-300 cursor-pointer'
                : 'text-neutral-300'
            }`}
          >
            {label}
          </p>

          {comment && (
            <span className="self-end ml-4 text-xs text-neutral-500" style={{lineHeight: '20px'}}>
              {comment}
            </span>
          )}
        </div>
      </div>
      <div className={`${children ? 'mt-2' : ''}`}>{isOpen && children}</div>
    </div>
  );
};

const RecursiveTree = ({ listMeta }: RecursiveTreeProps) => {
  const createTree = (branch: TreeBranch, i: number) => {
    return (
      branch.branches && (
        <TreeItem
          id={branch.id}
          key={branch.id}
          type={branch.type}
          step={i}
          comment={branch.comment}
          label={branch.label}
        >
          {branch.branches.map((branch: TreeBranch) => {
            return (
              <Fragment key={branch.label}>
                {createTree(branch, i + 1)}
              </Fragment>
            );
          })}
        </TreeItem>
      )
    );
  };

  return (
    <div>
      {listMeta.map((branch: TreeBranch, i: any) => (
        <div key={i}>{createTree(branch, 0)}</div>
      ))}
    </div>
  );
};

export default RecursiveTree;
