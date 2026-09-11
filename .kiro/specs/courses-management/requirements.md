# Requirements Document

## Introduction

The Courses Management feature enables administrators to manage courses/units within the Clasy admin dashboard. This feature provides a comprehensive interface for viewing, creating, editing, and deleting course records with detailed information including identification, location, operational status, and additional notes. The feature must integrate seamlessly with the existing Next.js 16 application while maintaining the established dark theme glassmorphism design aesthetic with amber and teal color palette.

## Glossary

- **Courses_Management_System**: The complete feature encompassing courses list, form, and navigation components
- **Courses_List_Page**: The main page displaying all courses in a data table with search and pagination
- **Course_Form**: The interface for creating and editing course records
- **Course_Record**: A single course/unit entry containing identification, location, status, and notes
- **NavRow_Component**: The existing navigation component containing navigation pills including the Courses button
- **Data_Table**: The table component displaying course records with columns for various attributes
- **Glassmorphism_Styling**: The design pattern using frosted glass effect with transparency, blur, and subtle borders
- **App_Router**: Next.js 16 routing system using the app directory structure
- **Active_State**: Visual indication showing the current active navigation item
- **Search_Functionality**: The capability to filter course records by search query
- **Pagination_Controls**: UI elements for navigating through paginated course records
- **Action_Buttons**: View, Edit, and Delete controls for each course record row
- **User**: Administrator using the Clasy admin dashboard

## Requirements

### Requirement 1: Navigation to Courses Page

**User Story:** As a User, I want to navigate to the courses management page from the main navigation, so that I can access course management functionality.

#### Acceptance Criteria

1. WHEN the User clicks the "Courses" button in the NavRow_Component, THE Courses_Management_System SHALL navigate to the "/courses" route
2. WHEN the User is on the "/courses" route, THE NavRow_Component SHALL display the "Courses" button with Active_State styling
3. THE NavRow_Component SHALL use Next.js App_Router Link component for navigation
4. WHEN navigation occurs, THE Courses_Management_System SHALL render the transition smoothly without page reload

### Requirement 2: Display Courses List

**User Story:** As a User, I want to view all courses in a structured table, so that I can review course information at a glance.

#### Acceptance Criteria

1. WHEN the Courses_List_Page loads, THE Data_Table SHALL display all Course_Record entries with columns: Kode, Nama Unit, Divisi, Lokasi, Lantai, Area/Zone, and Status
2. THE Data_Table SHALL apply Glassmorphism_Styling consistent with the existing dashboard design
3. THE Data_Table SHALL use the dark theme color palette with amber (#e79a5f) and teal (#5fc9c9) accents
4. THE Data_Table SHALL display readable text with appropriate contrast against dark backgrounds
5. WHEN the Data_Table contains no Course_Record entries, THE Courses_List_Page SHALL display an empty state message
6. THE Data_Table SHALL use Plus Jakarta Sans font family

### Requirement 3: Search Courses

**User Story:** As a User, I want to search for specific courses, so that I can quickly find relevant records.

#### Acceptance Criteria

1. WHEN the User enters text into the search input, THE Search_Functionality SHALL filter Course_Record entries matching the search query
2. THE Search_Functionality SHALL search across Kode, Nama Unit, Divisi, Lokasi, Lantai, Area/Zone, and Status fields
3. THE Search_Functionality SHALL update the Data_Table results in real-time as the User types
4. WHEN the search query matches zero Course_Record entries, THE Data_Table SHALL display a "no results found" message
5. THE search input SHALL apply dark theme styling with focus state visual feedback

### Requirement 4: Paginate Courses List

**User Story:** As a User, I want to navigate through paginated course records, so that I can browse large datasets efficiently.

#### Acceptance Criteria

1. THE Pagination_Controls SHALL display the total number of Course_Record entries in the format "X result" or "X results"
2. THE Pagination_Controls SHALL provide a "Per page" dropdown with options for results per page
3. WHEN the User selects a different "Per page" value, THE Data_Table SHALL update to display the specified number of Course_Record entries per page
4. WHEN the total Course_Record entries exceed the per-page limit, THE Pagination_Controls SHALL provide navigation buttons for previous and next pages
5. THE Pagination_Controls SHALL disable the previous button when on the first page
6. THE Pagination_Controls SHALL disable the next button when on the last page
7. WHEN the User changes pages, THE Data_Table SHALL scroll to the top of the page
8. THE Pagination_Controls SHALL apply Glassmorphism_Styling consistent with the dashboard design

### Requirement 5: Create New Course

**User Story:** As a User, I want to create new course records, so that I can add courses to the system.

#### Acceptance Criteria

1. WHEN the User clicks the "New Unit" button on the Courses_List_Page, THE Courses_Management_System SHALL navigate to the Course_Form in create mode
2. THE "New Unit" button SHALL be positioned in the top right of the Courses_List_Page
3. THE "New Unit" button SHALL use amber color (#e79a5f) styling
4. THE "New Unit" button SHALL display hover effects consistent with the glassmorphism design
5. WHEN the Course_Form loads in create mode, THE Course_Form SHALL display empty input fields ready for data entry
6. THE Course_Form SHALL apply Glassmorphism_Styling using cards/sections for form field grouping

### Requirement 6: Course Identification Fields

**User Story:** As a User, I want to specify course identification details, so that each course has unique identifiers and names.

#### Acceptance Criteria

1. THE Course_Form SHALL provide an "Identitas Unit" section containing identification fields
2. THE Course_Form SHALL provide a "Kode dan Nama Unit/Equipment" input field
3. THE Course_Form SHALL provide a "Nama Unit" input field
4. WHEN the User submits the Course_Form without completing the "Kode dan Nama Unit/Equipment" field, THE Course_Form SHALL display a validation error message
5. WHEN the User submits the Course_Form without completing the "Nama Unit" field, THE Course_Form SHALL display a validation error message
6. THE input fields SHALL apply dark theme styling with focus state indicators
7. THE input fields SHALL use Plus Jakarta Sans font family

### Requirement 7: Course Location Fields

**User Story:** As a User, I want to specify course location details, so that I can track where each course is positioned.

#### Acceptance Criteria

1. THE Course_Form SHALL provide a "Lokasi Penempatan" section containing location fields
2. THE Course_Form SHALL provide a "Divisi" dropdown field with selectable division options
3. THE Course_Form SHALL provide a "Kode Unit" input field
4. THE Course_Form SHALL provide a "Lokasi" input field
5. THE Course_Form SHALL provide a "Lantai" input field for floor information
6. THE Course_Form SHALL provide an "Area/Zone" input field
7. THE dropdown fields SHALL display options in a styled dropdown menu with dark theme and Glassmorphism_Styling
8. WHEN the User opens a dropdown, THE Course_Form SHALL display the dropdown with hover effects for each option

### Requirement 8: Course Operational Status

**User Story:** As a User, I want to set the operational status of a course, so that I can track which courses are active or inactive.

#### Acceptance Criteria

1. THE Course_Form SHALL provide a "Status Operasional" dropdown field
2. THE "Status Operasional" dropdown SHALL include at minimum an "Aktif" option
3. THE "Status Operasional" dropdown SHALL apply dark theme styling consistent with other dropdowns
4. WHEN the User creates a new Course_Record, THE Course_Form SHALL default the "Status Operasional" to "Aktif"

### Requirement 9: Course Additional Notes

**User Story:** As a User, I want to add additional notes to course records, so that I can document important information or context.

#### Acceptance Criteria

1. THE Course_Form SHALL provide a "Keterangan" section containing a textarea field
2. THE textarea field SHALL support multi-line text entry
3. THE textarea field SHALL apply dark theme styling with focus state visual feedback
4. THE textarea field SHALL be resizable or have sufficient height for multiple lines of text

### Requirement 10: Submit Course Form

**User Story:** As a User, I want to save course records, so that my changes are persisted in the system.

#### Acceptance Criteria

1. THE Course_Form SHALL provide a "Create" button when in create mode
2. THE Course_Form SHALL provide an "Update" button when in edit mode
3. THE Course_Form SHALL provide a "Create & create another" button when in create mode
4. THE Course_Form SHALL provide a "Cancel" button
5. WHEN the User clicks "Create", THE Courses_Management_System SHALL validate all required fields
6. WHEN validation passes, THE Courses_Management_System SHALL save the Course_Record and navigate to the Courses_List_Page
7. WHEN the User clicks "Create & create another", THE Courses_Management_System SHALL save the Course_Record and reset the Course_Form for another entry
8. WHEN the User clicks "Cancel", THE Courses_Management_System SHALL navigate to the Courses_List_Page without saving
9. WHEN validation fails, THE Course_Form SHALL display validation error messages near the relevant fields
10. THE form buttons SHALL apply appropriate styling with amber color for primary actions and neutral colors for secondary actions

### Requirement 11: View Course Details

**User Story:** As a User, I want to view detailed information for a specific course, so that I can review all course attributes.

#### Acceptance Criteria

1. WHEN the User clicks the view Action_Buttons for a Course_Record row, THE Courses_Management_System SHALL display the course details
2. THE course details view SHALL display all fields in a read-only format with Glassmorphism_Styling
3. THE course details view SHALL provide a button to return to the Courses_List_Page
4. THE course details view SHALL provide a button to edit the Course_Record

### Requirement 12: Edit Course Record

**User Story:** As a User, I want to modify existing course records, so that I can update course information as needed.

#### Acceptance Criteria

1. WHEN the User clicks the edit Action_Buttons for a Course_Record row, THE Courses_Management_System SHALL navigate to the Course_Form in edit mode
2. WHEN the Course_Form loads in edit mode, THE Course_Form SHALL populate all fields with the existing Course_Record data
3. WHEN the User modifies fields and clicks "Update", THE Courses_Management_System SHALL validate and save the changes
4. WHEN validation passes, THE Courses_Management_System SHALL update the Course_Record and navigate to the Courses_List_Page

### Requirement 13: Delete Course Record

**User Story:** As a User, I want to delete course records, so that I can remove courses that are no longer needed.

#### Acceptance Criteria

1. WHEN the User clicks the delete Action_Buttons for a Course_Record row, THE Courses_Management_System SHALL display a confirmation dialog
2. THE confirmation dialog SHALL ask the User to confirm the deletion action
3. THE confirmation dialog SHALL apply Glassmorphism_Styling consistent with the dashboard design
4. WHEN the User confirms deletion, THE Courses_Management_System SHALL remove the Course_Record from the system
5. WHEN the User confirms deletion, THE Courses_Management_System SHALL update the Data_Table to reflect the removal
6. WHEN the User cancels deletion, THE Courses_Management_System SHALL close the confirmation dialog without removing the Course_Record

### Requirement 14: Row Action Buttons

**User Story:** As a User, I want to access actions for each course record, so that I can quickly perform operations on specific courses.

#### Acceptance Criteria

1. THE Data_Table SHALL display Action_Buttons for each Course_Record row
2. THE Action_Buttons SHALL include view, edit, and delete icons using lucide-react icon library
3. THE Action_Buttons SHALL display hover effects when the User hovers over them
4. THE Action_Buttons SHALL use appropriate colors: teal for view, amber for edit, and red/warning color for delete
5. THE Action_Buttons SHALL be positioned consistently in each row for easy access

### Requirement 15: Responsive Layout

**User Story:** As a User, I want the courses management interface to work on different screen sizes, so that I can manage courses from various devices.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768 pixels, THE Courses_List_Page SHALL adapt the Data_Table layout for mobile viewing
2. WHEN the viewport width is less than 768 pixels, THE Course_Form SHALL stack form fields vertically
3. THE Courses_Management_System SHALL maintain readability and usability across viewport sizes from 320 pixels to 1920 pixels wide
4. THE Courses_Management_System SHALL ensure buttons and interactive elements maintain adequate touch target sizes on mobile devices (minimum 44x44 pixels)

### Requirement 16: Visual Transitions and Hover Effects

**User Story:** As a User, I want smooth visual feedback when interacting with the interface, so that the application feels responsive and polished.

#### Acceptance Criteria

1. WHEN the User hovers over buttons, THE Courses_Management_System SHALL display hover effects with smooth transitions
2. WHEN the User hovers over Data_Table rows, THE Courses_Management_System SHALL highlight the row with subtle background color change
3. THE Courses_Management_System SHALL use CSS transitions with duration between 150ms and 300ms for hover effects
4. WHEN the User focuses on input fields, THE Course_Form SHALL display focus state with smooth transition effects
5. THE Courses_Management_System SHALL apply consistent transition timing across all interactive elements

### Requirement 17: Dark Theme Styling Consistency

**User Story:** As a User, I want the courses management feature to match the existing dashboard design, so that the interface feels cohesive and familiar.

#### Acceptance Criteria

1. THE Courses_Management_System SHALL use the same dark background colors as the existing dashboard
2. THE Courses_Management_System SHALL use amber (#e79a5f) for primary action buttons and accents
3. THE Courses_Management_System SHALL use teal (#5fc9c9) for secondary accents and informational elements
4. THE Courses_Management_System SHALL apply Glassmorphism_Styling effects matching the existing dashboard components (transparency, backdrop blur, subtle borders)
5. THE Courses_Management_System SHALL use Plus Jakarta Sans font family matching the existing dashboard typography
6. THE Courses_Management_System SHALL NOT use Tailwind CSS utility classes and SHALL use inline styles or custom.css instead

### Requirement 18: Data Persistence

**User Story:** As a User, I want my course data to be saved persistently, so that I can access it across sessions.

#### Acceptance Criteria

1. WHEN the User creates a Course_Record, THE Courses_Management_System SHALL persist the data to the backend storage
2. WHEN the User updates a Course_Record, THE Courses_Management_System SHALL persist the changes to the backend storage
3. WHEN the User deletes a Course_Record, THE Courses_Management_System SHALL remove the data from the backend storage
4. WHEN the Courses_List_Page loads, THE Courses_Management_System SHALL retrieve all Course_Record entries from the backend storage
5. WHEN a backend operation fails, THE Courses_Management_System SHALL display an error message to the User

### Requirement 19: Form Validation Feedback

**User Story:** As a User, I want clear feedback when I make input errors, so that I can correct them efficiently.

#### Acceptance Criteria

1. WHEN a required field is empty and the User submits the Course_Form, THE Course_Form SHALL display a validation error message below the field
2. THE validation error messages SHALL use red or warning color for visibility
3. WHEN the User corrects a validation error, THE Course_Form SHALL remove the error message
4. WHEN validation errors exist, THE Course_Form SHALL prevent form submission
5. THE validation error messages SHALL describe what is required to fix the error

### Requirement 20: Loading States

**User Story:** As a User, I want visual feedback during data loading operations, so that I know the system is processing my request.

#### Acceptance Criteria

1. WHEN the Courses_List_Page is loading Course_Record entries, THE Courses_Management_System SHALL display a loading indicator
2. WHEN the Course_Form is submitting data, THE Courses_Management_System SHALL display a loading indicator on the submit button
3. WHEN the Course_Form is submitting data, THE Courses_Management_System SHALL disable the submit button to prevent duplicate submissions
4. THE loading indicators SHALL use styling consistent with the glassmorphism design
5. WHEN data loading completes, THE Courses_Management_System SHALL remove the loading indicator and display the content

## Technical Constraints

1. **Framework Version**: Must use Next.js 16 with App Router architecture
2. **Routing**: Must use Next.js App_Router with the app directory structure
3. **Styling Approach**: Must NOT use Tailwind CSS utilities; must use inline styles or custom.css
4. **Icon Library**: Must use lucide-react for all icons
5. **Font**: Must use Plus Jakarta Sans font family
6. **Color Palette**: Must use amber (#e79a5f) and teal (#5fc9c9) as primary accent colors
7. **Design Pattern**: Must apply glassmorphism styling with transparency, backdrop blur, and subtle borders
8. **Theme**: Must maintain dark theme throughout all components
9. **Navigation Integration**: Must integrate with existing NavRow_Component
10. **No External UI Libraries**: Must not introduce component libraries like Material-UI, Chakra UI, or similar that conflict with the custom glassmorphism design
