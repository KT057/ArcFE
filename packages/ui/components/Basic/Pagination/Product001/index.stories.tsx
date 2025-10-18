import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Pagination001 } from "./index";

export default {
  title: "Basic/Pagination/Product001",
  component: Pagination001,
  tags: ["autodocs"]
} as Meta<typeof Pagination001>;

const Template: StoryFn<typeof Pagination001> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Pagination001
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  size: "middle",
  maxVisiblePages: 5,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const LargePagination = Template.bind({});
LargePagination.args = {
  currentPage: 5,
  totalPages: 20,
  size: "large",
  maxVisiblePages: 7,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const SmallPagination = Template.bind({});
SmallPagination.args = {
  currentPage: 2,
  totalPages: 5,
  size: "small",
  maxVisiblePages: 5,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const WithoutFirstLast = Template.bind({});
WithoutFirstLast.args = {
  currentPage: 5,
  totalPages: 15,
  size: "middle",
  maxVisiblePages: 5,
  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const WithoutPrevNext = Template.bind({});
WithoutPrevNext.args = {
  currentPage: 3,
  totalPages: 8,
  size: "middle",
  maxVisiblePages: 5,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const MinimalPagination = Template.bind({});
MinimalPagination.args = {
  currentPage: 2,
  totalPages: 3,
  size: "middle",
  maxVisiblePages: 3,
  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  currentPage: 3,
  totalPages: 10,
  size: "middle",
  maxVisiblePages: 5,

  style: {
    backgroundColor: "#f8fafc",
    activeBackgroundColor: "red",
    borderColor: "#e2e8f0",
    color: "#475569",
    activeColor: "#ffffff",
    fontWeight: 600
  },
  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  currentPage: 4,
  totalPages: 12,
  size: "middle",
  maxVisiblePages: 5,

  style: {
    backgroundColor: "#374151",
    activeBackgroundColor: "#10b981",
    borderColor: "#6b7280",
    color: "#f9fafb",
    activeColor: "#ffffff",
    fontWeight: 500
  },
  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 25,
  totalPages: 100,
  size: "middle",
  maxVisiblePages: 5,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const SinglePage = Template.bind({});
SinglePage.args = {
  currentPage: 1,
  totalPages: 1,
  size: "middle",
  maxVisiblePages: 5,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  currentPage: 1,
  totalPages: 15,
  size: "middle",
  maxVisiblePages: 5,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 15,
  totalPages: 15,
  size: "middle",
  maxVisiblePages: 5,

  onPageChange: (page: number) => console.log("Page changed to:", page)
};
