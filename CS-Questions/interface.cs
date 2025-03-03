
/*
*Do you think design of below interface is correct ?
	interface StudentRegistrationAdmission
	{
	ResgisterStudent();
	InitiateAdmissionProcedure();
	CalcualteFees();
	PayFees();
	SendRegistrationDetailsSms();
	SendEmailToStudent();
	SendPaymentReceiptOnEmail();
}
*If Yes (Incorrect Answer), Why?*
*If No, Is there any way to Improve design of this interface?*
*/

// Answer: Added the return types for the interface methods.
interface StudentRegistrationAdmission
{
	void RegisterStudent();
	void InitiateAdmissionProcedure();
	decimal CalculateFees();
	void PayFees();
	void SendRegistrationDetailsSms();
	void SendEmailToStudent();
	void SendPaymentReceiptOnEmail();
}
