import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Template from "./Template";
import dayjs from "dayjs";

it("renders correctly", () => {
  const { queryByTestId } = render(
    <Template
      template={{
        id: "123",
        title: "Generic Title",
        date: "2022-04-19T22:00:00.000Z",
      }}
    />
  );

  expect(queryByTestId("small-logo-icon")).toBeTruthy();
  expect(queryByTestId("dummy-preview")).toBeTruthy();
});

describe("Template", () => {
  describe("with future date", () => {
    it("displays 'in X time'", () => {
      const { queryByTestId } = render(
        <Template
          template={{
            id: "123",
            title: "Generic Title",
            date: dayjs().add(1, "day").format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
          }}
        />
      );
      const timeSpan = queryByTestId("time-span");
      const startsWithIn = /^in/.test(timeSpan.innerHTML);
      expect(startsWithIn).toBeTruthy();
    });
  });
  describe("with past date", () => {
    it("displays 'X time ago'", () => {
      const { queryByTestId } = render(
        <Template
          template={{
            id: "123",
            title: "Generic Title",
            date: dayjs().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
          }}
        />
      );
      const timeSpan = queryByTestId("time-span");
      const endsWithAgo = /ago$/.test(timeSpan.innerHTML);
      expect(endsWithAgo).toBeTruthy();
    });
  });
});
