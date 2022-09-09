import React from "react";
import { screen, render } from "@testing-library/react"
// import supertest from "supertest";
import Login from "../Components/Login";

describe('<Login />', () => {
    it('Finds the login button', () => {
      render(<Login />)
      const button = screen.getByRole('button', { name: /Home/i })
      expect(button).not.toBe(undefined)
    })
  })