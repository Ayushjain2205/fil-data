import React, { Component } from "react";
import Select from "react-select";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: "Title", label: "Title" },
        { value: "Label", label: "Label" },
      ],
      selectedOption: null, // Ensure you have this state to track the current selection
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }); // Update the state with the new selected option
    let { onChange } = this.props;
    let v = selectedOption.value;
    onChange(v);
  };

  onDelete = () => {
    let { onDelete } = this.props;
    onDelete();
  };

  render() {
    const { selectedOption } = this.state; // Destructure selectedOption from state

    return (
      <div className="flex items-center space-x-2" style={{ width: "200px" }}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.state.options}
          className="flex-grow"
          styles={{ container: (base) => ({ ...base, flex: 1 }) }}
        />

        <button onClick={this.onDelete} className="bg-white p-1 rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 1.5C3.35218 1.5 2.97064 1.65804 2.68934 1.93934C2.40804 2.22064 2.25 2.60218 2.25 3V4.5C2.25 4.89782 2.40804 5.27936 2.68934 5.56066C2.97064 5.84196 3.35218 6 3.75 6H4.5V19.5C4.5 20.2956 4.81607 21.0587 5.37868 21.6213C5.94129 22.1839 6.70435 22.5 7.5 22.5H16.5C17.2956 22.5 18.0587 22.1839 18.6213 21.6213C19.1839 21.0587 19.5 20.2956 19.5 19.5V6H20.25C20.6478 6 21.0294 5.84196 21.3107 5.56066C21.592 5.27936 21.75 4.89782 21.75 4.5V3C21.75 2.60218 21.592 2.22064 21.3107 1.93934C21.0294 1.65804 20.6478 1.5 20.25 1.5H15C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0L10.5 0C10.1022 0 9.72064 0.158035 9.43934 0.43934C9.15804 0.720644 9 1.10218 9 1.5H3.75ZM8.25 7.5C8.44891 7.5 8.63968 7.57902 8.78033 7.71967C8.92098 7.86032 9 8.05109 9 8.25V18.75C9 18.9489 8.92098 19.1397 8.78033 19.2803C8.63968 19.421 8.44891 19.5 8.25 19.5C8.05109 19.5 7.86032 19.421 7.71967 19.2803C7.57902 19.1397 7.5 18.9489 7.5 18.75V8.25C7.5 8.05109 7.57902 7.86032 7.71967 7.71967C7.86032 7.57902 8.05109 7.5 8.25 7.5ZM12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V18.75C12.75 18.9489 12.671 19.1397 12.5303 19.2803C12.3897 19.421 12.1989 19.5 12 19.5C11.8011 19.5 11.6103 19.421 11.4697 19.2803C11.329 19.1397 11.25 18.9489 11.25 18.75V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5ZM16.5 8.25V18.75C16.5 18.9489 16.421 19.1397 16.2803 19.2803C16.1397 19.421 15.9489 19.5 15.75 19.5C15.5511 19.5 15.3603 19.421 15.2197 19.2803C15.079 19.1397 15 18.9489 15 18.75V8.25C15 8.05109 15.079 7.86032 15.2197 7.71967C15.3603 7.57902 15.5511 7.5 15.75 7.5C15.9489 7.5 16.1397 7.57902 16.2803 7.71967C16.421 7.86032 16.5 8.05109 16.5 8.25Z"
              fill="red"
            />
          </svg>
        </button>
      </div>
    );
  }
}
