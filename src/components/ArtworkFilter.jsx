import React, { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";

const ArtworkFilter = ({ onFilterChange, onDateFilterChange, selectedMuseum, startDate, endDate }) => {
    const [dateError, setDateError] = useState("");
    const [tempStartDate, setTempStartDate] = useState(startDate || ""); 
    const [tempEndDate, setTempEndDate] = useState(endDate || "");
    const [tempMuseum, setTempMuseum] = useState(selectedMuseum || "");

    const handleMuseumChange = (e) => {
        setTempMuseum(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setTempStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setTempEndDate(e.target.value);
    };

    const applyFilters = () => {
        if (tempStartDate && tempEndDate && parseInt(tempStartDate) > parseInt(tempEndDate)) {
            setDateError("Start date cannot be greater than end date.");
        } else {
            setDateError("");
            onDateFilterChange(tempStartDate, tempEndDate);
            onFilterChange(tempMuseum);
        }
    };

    return (
        <Form style={{ 
            backgroundColor: "#FFFFFF", 
            padding: "1.5rem", 
            borderRadius: "10px", 
            color: "#0D0C0A",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}>
            <Form.Group>
                <Form.Label style={{ color: "#0D0C0A", fontWeight: "bold" }}>Filter by Museum</Form.Label>
                <Form.Control
                    as="select"
                    value={tempMuseum}
                    onChange={handleMuseumChange}
                    style={{
                        color: "#0D0C0A", 
                        backgroundColor: "#FFFFFF", 
                        border: "1px solid #0D0C0A",
                        fontWeight: "bold",
                    }}
                >
                    <option value="">All Museums</option>
                    <option value="Harvard Art Museums">Harvard Art Museums</option>
                    <option value="Rijksmuseum">Rijksmuseum</option>
                    <option value="Art Institute of Chicago">Art Institute of Chicago</option>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label style={{ color: "#0D0C0A", fontWeight: "bold" }}>Filter by Date Range</Form.Label>
                {dateError && <Alert variant="danger">{dateError}</Alert>}
                <div className="d-flex">
                    <Form.Control
                        type="number"
                        placeholder="Start Year"
                        value={tempStartDate}
                        onChange={handleStartDateChange}
                        style={{
                            color: "#0D0C0A", 
                            backgroundColor: "#FFFFFF", 
                            border: "1px solid #0D0C0A",
                            fontWeight: "bold",
                        }}
                        className="custom-placeholder" 
                    />
                    <span className="mx-2" style={{ color: "#0D0C0A", fontWeight: "bold" }}>to</span>
                    <Form.Control
                        type="number"
                        placeholder="End Year"
                        value={tempEndDate}
                        onChange={handleEndDateChange}
                        style={{
                            color: "#0D0C0A", 
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #0D0C0A",
                            fontWeight: "bold",
                        }}
                        className="custom-placeholder" 
                    />
                </div>
            </Form.Group>
            <div className="d-flex justify-content-center mt-4">
                <Button 
                    variant="dark" 
                    onClick={applyFilters}
                    style={{ fontWeight: "bold", minWidth: "150px" }}
                >
                    Apply Filter
                </Button>
            </div>
        </Form>
    );
};

export default ArtworkFilter;
