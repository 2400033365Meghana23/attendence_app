import React, { useReducer } from 'react';

// Initial state
const initialState = {
  students: [
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    { id: 3, name: 'Student 3', present: false },
  ],
};

// Reducer function
const attendanceReducer = (state, action) => {
  switch (action.type) {
    case 'MARK_PRESENT':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload ? { ...student, present: true } : student
        ),
      };
    case 'MARK_ABSENT':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload ? { ...student, present: false } : student
        ),
      };
    case 'RESET':
      return {
        ...state,
        students: state.students.map((student) => ({ ...student, present: false })),
      };
    default:
      return state;
  }
};

const AttendanceTracker = () => {
  const [state, dispatch] = useReducer(attendanceReducer, initialState);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '40px' }}>
      <h2>📋 Student Attendance Tracker</h2>

      <table border="1" style={{ margin: '20px auto', borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>Name</th>
            <th>Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td style={{ color: student.present ? 'green' : 'red', fontWeight: 'bold' }}>
                {student.present ? 'Present' : 'Absent'}
              </td>
              <td>
                <button
                  style={{ marginRight: '8px' }}
                  onClick={() => dispatch({ type: 'MARK_PRESENT', payload: student.id })}
                >
                  Mark Present
                </button>
                <button
                  onClick={() => dispatch({ type: 'MARK_ABSENT', payload: student.id })}
                >
                  Mark Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        style={{
          backgroundColor: '#d9534f',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset Attendance
      </button>
    </div>
  );
};

export default AttendanceTracker;
