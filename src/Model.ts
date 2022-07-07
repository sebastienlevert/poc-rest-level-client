export interface User {
    /** A freeform text entry field for the user to describe themselves. Returned only on $select. */
    aboutMe?: string | undefined;
    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, not, and in). */
    accountEnabled?: boolean | undefined;
    /** The user's activities across devices. Read-only. Nullable. */
   
    /** The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    city?: string | undefined;
    /** The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length is 64 characters.Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    companyName?: string | undefined;
    /** Sets whether consent has been obtained for minors. Allowed values: null, Granted, Denied and NotRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, not, and in). */
    consentProvidedForMinor?: string | undefined;
    /** The user's contacts folders. Read-only. Nullable. */
    /** The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    country?: string | undefined;
    /** The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, not , ge, le, in). */
    createdDateTime?: Date | undefined;

    /** Indicates whether the user account was created through one of the following methods:  As a regular school or work account (null). As an external account (Invitation). As a local account for an Azure Active Directory B2C tenant (LocalAccount). Through self-service sign-up by an internal user using email verification (EmailVerified). Through self-service sign-up by an external user signing up through a link that is part of a user flow (SelfServiceSignUp).  Read-only.Supports $filter (eq, ne, not, and in). */
    creationType?: string | undefined;
    /** The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, not , ge, le, in, and eq on null values). */
    department?: string | undefined;
    /** The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000. */
    deviceEnrollmentLimit?: number | undefined;
    /** The list of troubleshooting events for this user. */

    /** Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, not , ge, le, in, startsWith). */
    employeeType?: string | undefined;
    /** The user's events. Default is to show events under the Default Calendar. Read-only. Nullable. */
    events?: Event[] | undefined;
    /** For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, not , in). */
    externalUserState?: string | undefined;
    /** Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, not , in). */
    externalUserStateChangeDateTime?: Date | undefined;
    /** The fax number of the user. Supports $filter (eq, ne, not , ge, le, in, startsWith, and eq on null values). */
    faxNumber?: string | undefined;
    /** The followedSites property */

    /** Do not use in Microsoft Graph. Manage this property through the Microsoft 365 admin center instead. Represents whether the user should be included in the Outlook global address list. See Known issue. */
    showInAddressList?: boolean | undefined;
    /** Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset. */
    signInSessionsValidFromDateTime?: Date | undefined;
    /** A list for the user to enumerate their skills. Returned only on $select. */
    skills?: string[] | undefined;
    /** The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    state?: string | undefined;
    /** The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    streetAddress?: string | undefined;
    /** The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    surname?: string | undefined;
    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    usageLocation?: string | undefined;
    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: This property cannot contain accent characters. Only the following characters are allowed A - Z, a - z, 0 - 9, ' . - _ ! # ^ ~. For the complete list of allowed characters, see username policies. Supports $filter (eq, ne, not, ge, le, in, startsWith, endsWith) and $orderBy. */
    userPrincipalName?: string | undefined;
    /** A String value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, not, in, and eq on null values). NOTE: For more information about the permissions for member and guest users, see What are the default user permissions in Azure Active Directory? */
    userType?: string | undefined;
}
export interface Message {
    subject?: string | undefined;
    internetMessageId?: string | undefined;
    /** The isDeliveryReceiptRequested property */
    isDeliveryReceiptRequested?: boolean | undefined;
    /** The isDraft property */
    isDraft?: boolean | undefined;
    /** The isRead property */
    isRead?: boolean | undefined;
    toRecipients?:ToRecipient[];
    body?:Record<string,string>
}

export interface MessageCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: Message[] | undefined;
}

export interface Drive{
    /** Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive. */
    bundles?: DriveItem[] | undefined;
    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only. */
    driveType?: string | undefined;
    /** The list of items the user is following. Only in OneDrive for Business. */
    following?: DriveItem[] | undefined;
    /** All items contained in the drive. Read-only. Nullable. */
    items?: DriveItem[] | undefined;
    /** For drives in SharePoint, the underlying document library list. Read-only. Nullable. */
    /** Optional. The user account that owns the drive. Read-only. */
    /** Optional. Information about the drive's storage space quota. Read-only. */
    quota?: Quota | undefined;
    /** The root folder of the drive. Read-only. */
    root?: DriveItem | undefined;
    /** The sharePointIds property */
}

export interface DriveItem{
    content?: string | undefined;
    _quota?: Quota | undefined;
}

export interface Quota {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Total space consumed by files in the recycle bin, in bytes. Read-only. */
    deleted?: number | undefined;
    /** Total space remaining before reaching the quota limit, in bytes. Read-only. */
    remaining?: number | undefined;
    /** Enumeration value that indicates the state of the storage space. Read-only. */
    state?: string | undefined;
    /** Total allowed storage space, in bytes. Read-only. */
    total?: number | undefined;
    /** Total space used, in bytes. Read-only. */
    used?: number | undefined;
}

export interface SendMailBody{
    message:Message
}

export interface ToRecipient{
    emailAddress:EmailAddress
}
export interface EmailAddress{
    address:string
}