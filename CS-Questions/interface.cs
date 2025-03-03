
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
/*
* Answer: 
*	The interface design is incorrect because the methods do not have return types.
* 	The interface design can be improved by adding return types to the methods.
* 	The name of the Interface and methods can also be corrected for consistency.
* The corrected interface is as follows:
*/
interface IStudentRegistrationAdmission
{
	void registerStudent();
	void initiateAdmissionProcedure();
	decimal calculateFees();
	void payFees();
	void sendRegistrationDetailsSms();
	void sendEmailToStudent();
	void sendPaymentReceiptOnEmail();
}

